import { Component } from 'react';

// import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    state = {
        name: '',
        salary: '',
        empty: false
    }


    onValueChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        if (this.state.name.length > 3 && this.state.salary.length !== 0) {
            this.props.onAdd(this.state.name, this.state.salary, this.state.empty);
            this.setState({
                name: '',
                salary: '',
                empty: false
            })
        } else {
            this.setState({
                empty: true
            })
        }
    }

    static onLog = () => {
        console.log(123)
    }

    static logged = 'on'

    render() {
        const {name, salary, empty} = this.state;

        let className = 'form-control new-post-label';

        if (empty) {
            className += ' err';
        }

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className={className}
                        placeholder="Как его зовут?"
                        name="name" 
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className={className}
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Добавить</button>
                </form>
            </div>
        )
    }
}

EmployeesAddForm.onLog()
console.log(EmployeesAddForm.logged)

export default EmployeesAddForm;