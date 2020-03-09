import React, {Component} from 'react';
import { FaGitAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Form, SubmitButton, List } from './styles';

import api from '../../services/api';

export default class Main extends Component{

    state = {
        newRepo: '',
        repositories: [],
        loading: false
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value});
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true});
        const { newRepo, repositories } = this.state;

        const response = await api.get(`/repos/${this.state.newRepo}`);
        const data = {
            name: response.data.full_name
        }
        this.setState({ 
            repositories: [...repositories, data],
            newRepo: '',
            loading: false
        });
    }

    render(){
        return(
            <Container>
                <h1><FaGitAlt/>Repositórios</h1>

                <Form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Adicionar repositório"  
                        value={this.state.newRepo}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton loading={this.state.loading}>
                        {this.state.loading ?
                            (<FaSpinner fontSize={14} color="#fafafa" />)
                            :
                            (<FaPlus fontSize={14} color="#fafafa" />)}
                    </SubmitButton>
                    
                </Form>
                <List>
                        {this.state.repositories.map(repo => (
                            <li key={repo.name}>
                                <span>{repo.name}</span>
                                <a href={``}>Detalhes</a>
                            </li>
                        ))}
                    </List>
            </Container>
        )
}
}