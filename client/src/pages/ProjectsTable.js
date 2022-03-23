import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './ProjectsTable.css';
import Local from '../helpers/Local';


function ProjectsTable() {
  let [projects, setProjects] = useState([]);

    const getProjects = () => {
      let user = Local.getUserSkills();
      console.log('thisis user from local', user);
      //make a comma separated list of skill ids
      let skillId = user.skills.map(s => (s.id))
      let skillIdList = skillId.join(",")
      console.log('this skillId', skillIdList)
     fetch(`/projects?skills=${skillIdList}`)
      .then(response => response.json())
      .then(projects => {
        setProjects(projects);
      })
      .catch(error => {
        console.log(error);
      });
    };

    useEffect(() => {
        getProjects();
      }, []);

  return (
    <div className="container">
        <h2>My Projects</h2>
        <div className="text-start mt-5 mb-5">
          {/* <button className="btn btn-primary" role="button"></button> */}
          <a href="/newprojectpage" className="btn btn-primary">+ Add Project</a>
        </div>
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>Project Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {projects.map(p => (
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.p_name}</td>
                    <td>{p.p_description}</td>
                    <td><img src={p.p_img}/></td>
                    <td>
                    <Link to={`/editprojectpage/${p.id}`} class="btn btn-primary">Edit</Link>
                    <button type="button" className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
                ))
            }
            </tbody>
       </table>
    </div>
  )
}

export default ProjectsTable;
