import React from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

/* NOTE: Utilizando com Class Component.
* Todo componente de ClassComponente PRECISA extender React.Componente
*/
export default class PostsList extends React.Component {

  // PRECISA definir o render!
  render() {
    return (
      <Container>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    )
  }

}


// NOTE: Utilizando com Hook(Functional Component)
// export default function PostsList() {
//   return (
//     <Container>
//       {posts.map((post) => (
//         <Post
//           key={post.id}
//           title={post.title}
//           description={post.description}
//         />
//       ))}
//     </Container>
//   );
// }
