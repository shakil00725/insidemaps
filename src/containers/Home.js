import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import Spinner from "../core/Spinner";
import Header from "../components/Header/Header";
import ProjectList from "../components/ProjectList/ProjectList";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";

class HomeContainer extends Component {
  state = {
    Columns: {
      column1: {
        name: "Completed",
        items: [],
      },
      column2: {
        name: "Pending",
        items: [],
      },
      column3: {
        name: "In Progress",
        items: [],
      },
    },
    isLoading: true,
    filterWord: null,
  };

  headers = {
    Authorization: `Bearer ${this.props.token}`,
  }

  addTag = (value, columnID, projId) => {
    let { Columns } = this.state;

    const indexID = Columns[columnID].items.findIndex(item => item.id === projId);
    Columns[columnID].items[indexID].tags = [
      ...Columns[columnID].items[indexID].tags,
      value,
    ];
    this.setState({ Columns });
  };

  removeTags = (columnId, projId, tagIndex) => {
    let { Columns } = this.state;

    const projectIndex = Columns[columnId].items.findIndex(item => item.id === projId);
    const now = Columns[columnId].items[projectIndex].tags.filter(
      (val, ind) => ind !== tagIndex
    );
    Columns[columnId].items[projectIndex].tags = now;
    this.setState({
      Columns,
    });
  };

  getProjectDetails = async () => {
    let OrgID = this.props.orgID;
    const data = await axios.get(
      `${proxyUrl}https://www.insidemaps.com/api/v2/organizations/${OrgID}/projects?updatedSince=2019-11-20`,
      { headers: this.headers }
    );

    this.setState({ isLoading: true });

    const Projects = [...data.data.data];
    const promises = [];
    for (let id in Projects) {
      const projectId = Projects[id];
      promises.push(this.getProjectNames(projectId));
      promises.push(this.getProjectImage(projectId));
    }

    const resolved = await Promise.all(promises).catch((err) => []);
    const fetchedProjects = [];
    Projects.map((id, i) => {
      const name = resolved[i * 2 + 0];
      const image = resolved[i * 2 + 1];
      fetchedProjects.push({ id, name, image, tags: [] });
    });
    const { column2, column3 } = this.state.Columns;
    this.setState({
      Columns: {
        column1: {
          name: "Completed",
          items: fetchedProjects,
        },
        column2,
        column3,
      },
      isLoading: false,
    });
  };

  getProjectNames = async (projectID) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${proxyUrl}https://www.insidemaps.com/api/v2/projects/${projectID}`,
          { headers: this.headers }
        )
        .then((data) => {
          resolve(data.data.data.name);
        });
    });
  };

  getProjectImage = async (projectID) => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${proxyUrl}https://www.insidemaps.com/api/v2/projects/${projectID}/images/hdr`,
          { headers: this.headers }
        )
        .then((data) => {
          resolve(data.data.data[0]);
        });
    });
  };

  makeItToBack = (projects) => {
    let cnt = 0;
    for (let id in projects) {
      const project = projects[id];
      if (!project.tags || project.tags.length === 0) cnt += 1;
      else break;
    }
    return projects.slice(cnt).concat(projects.slice(0, cnt));
  };

  sortList = () => {
    const { column1, column2, column3 } = this.state.Columns;
    let sortedColumn1 = this.makeItToBack(_.sortBy(column1.items, "tags"));
    let sortedColumn2 = this.makeItToBack(_.sortBy(column2.items, "tags"));
    let sortedColumn3 = this.makeItToBack(_.sortBy(column3.items, "tags"));
    this.setState({
      Columns: {
        column1: {
          name: "Completed",
          items: sortedColumn1,
        },
        column2: {
          name: "Pending",
          items: sortedColumn2,
        },
        column3: {
          name: "In Progress",
          items: sortedColumn3,
        },
      },
    });
  };

  filterSearch = (event) => {
    let value = event.target.value;
    if (value !== "" && !/\s/.test(event.target.value)) {
      this.setState({filterWord: value})
    }
    else{
      this.setState({filterWord: null})
    } 
  };

  changeColumns = (columns) => {
    const { column1, column2, column3 } = columns;
    this.setState(
      {
        Columns: {
          column1,
          column2,
          column3,
        },
      },
    );
  };

  componentDidMount() {
    this.getProjectDetails();
  }

  render() {
    const { Columns, isLoading , filterWord} = this.state;

    return isLoading ? (
      <Spinner />
    ) : (
      <div>
        <Header sortList={this.sortList} filterSearch={this.filterSearch} />
        <ProjectList
          Columns={Columns}
          addTags={this.addTag}
          removeTags={this.removeTags}
          changeColumns={this.changeColumns}
          filterWord={filterWord}
        />
      </div>
    );
  }
}

export default HomeContainer;
