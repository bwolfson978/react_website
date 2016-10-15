import React from "react";
import Request from "superagent";
import _ from "lodash";

export default class GitProjectComponent extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        var url = "https://api.github.com/users/bwolfson978/repos";
        Request.get(url).then((response) => {
            this.setState({
                repos: response.body
            })
        })
    }


    render() {
        var projects = _.map(this.state.repos, (repo) => {
            return (
                <div class="col-md-4">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <h3 class="panel-title">{repo.name}</h3>
                        </div>
                        <div class="panel-body">
                            {repo.description}
                        </div>
                        <span><a href={repo.html_url} class="btn btn-link">Link to GitHub repo</a></span>
                    </div>
                </div>
            )
        });
        return <div>{projects}</div>
    }
}

