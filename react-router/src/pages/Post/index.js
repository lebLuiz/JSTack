import React, { useMemo } from 'react';
import {
    useParams,
    useLocation,
} from 'react-router-dom';

// NOTE: Utilizando ClassComponent
export default class Post extends React.Component {
    constructor(props) {
        super(props);

        const { search } = this.props.location;
        this.queryParams = new URLSearchParams(search);
    }

    // NOTE: Para conseguir navegar para outras rotas através de uma ação.
    handleNavigate = () => {
        this.props.history.push('/posts');
    }

    render() {
        // NOTE: Para pegar os parametros da rota
        console.log(this.props.match.params);

        // NOTE: Para conseguir pegar os query-params da rota.
        console.log(this.queryParams.get('test'));

        return (
            <>
                <button onClick={this.handleNavigate}>
                    Voltar para a lista de posts
                </button>
                <h1>Post Page</h1>
            </>
        )
    }
}

// NOTE: Utilizando FunctionComponent
// export default function Post() {
//     // NOTE: Para pegar os parametros da rota
//     const params = useParams();
//     console.log(params);

//     // NOTE: Para conseguir pegar os query-params da rota.
//     const { search } = useLocation();
//     const queryParams = useMemo(() => new URLSearchParams(search), [search]);

//     console.log(queryParams.get('test'));

//     return <h1>Post Page</h1>
// }