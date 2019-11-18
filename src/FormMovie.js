import React, {Component} from 'react';

class FormMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          poster: '',
          comment: '',
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    submitForm = (event) => {
        event.preventDefault();

        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };

        const url = "https://post-a-form.herokuapp.com/api/movies/";

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Added employee with the ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
                alert("Error during l'an employee addition");
            });
    }

    render(){
        return(
            <div className="FormMovie">
            <h1>My best movie</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                    <legend>Information</legend>
                    <div className="form-data">
                        <label htmlFor="title">Title</label>
                        <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={this.onChange}
                        value={this.state.lastname}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="poster">Poster</label>
                        <input
                        type="text"
                        id="poster"
                        name="poster"
                        onChange={this.onChange}
                        value={this.state.firstname}
                        />
                    </div>

                    <div className="form-data">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                        id="comment"
                        name="comment"
                        onChange={this.onChange}
                        value={this.state.email}
                        cols= "33"
                        rows = "5"
                        >
                        </textarea>
                    </div>
                    <hr />
                    <div className="form-data">
                        <input type="submit" value="Send" />
                    </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}


export default FormMovie;