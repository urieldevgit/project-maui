/* eslint-disable no-underscore-dangle */
const { UserService, PostService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      const { idUser } = req.params;
      const { body } = req;

      // Obtener y validar usuario
      const user = await UserService.getUser(idUser);

      // Crear el objeto posts
      const post = await PostService.create(body);

      // Agregar el post al usuario y guardar
      const userPost = await UserService.addPost(user, post);

      // Regresar el user con el nuevo post
      res.status(201).send({ userPost });
    } catch (error) {
      res.status(400).send({ message: 'Error adding post to user', error });
    }
  },
  getPosts: async (req, res) => {
    try {
      const { idUser } = req.params;

      // Obtener y validar usuario
      const user = await UserService.getUser(idUser);

      // Obtener los posts de ese usuario
      const { posts } = user;
      // Regresar los posts
      res.status(200).send({ posts });
    } catch (error) {
      res.status(400).send({ message: 'Error updating post to user', error });
    }
  },
  getPost: async (req, res) => {
    try {
      const { idUser, idPost } = req.params;

      // Obtener y validar usuario
      const user = await UserService.getUser(idUser);
      // Obtener los posts de ese usuario
      const { posts } = user;
      // Buscar el post dentro del listado

      // user .posts.id(idPost) -> Así se encuentra un post mediante id dentro de posts

      const post = posts.find((item) => `${item._id}` === idPost);
      // Regresar los posts
      res.status(200).send({ post });
    } catch (error) {
      res.status(400).send({ message: 'Error updating post to user', error });
    }
  },
  updatePost: async (req, res) => {
    try {
      const { idUser, idPost } = req.params;

      // Obtener y validar usuario
      const user = await UserService.getUser(idUser);
      // Obtener los posts de ese usuario
      let { posts } = user;
      // Buscar el post dentro del listado
      const post = posts.find((item) => `${item._id}` === idPost);
      // Remover el post a modificar
      posts = posts.filter((item) => `${item._id}` !== idPost);

      // Actualizar el post
      const updatedPost = Object.assign(post, req.body);

      // Agregarlo al arreglo de posts
      posts.push(updatedPost);

      // Sustituir el nuevo array posts en el user
      await UserService.addPosts(user, posts);

      // Regresar el post actualizado
      res.status(200).send({ updatedPost });
    } catch (error) {
      res.status(400).send({ message: 'Error updating post to user', error });
    }
  },
  get: async (req, res) => {
    try {
      const { idUser, idPost } = req.params;

      // Obtener y validar usuario
      const user = await UserService.getUser(idUser);
      if (!user) res.status(404).send({ message: 'User not found' });

      // Obtenemos el post del usuario
      // No lleva await porque no invocamos ninguna promesa
      const post = PostService.getByIdInUser(idPost, user);
      if (!post) res.status(404).send({ message: 'Post not found' });

      res.status(200).send({ post });
    } catch (error) {
      res.status(400).send({ message: 'Error getting user post by id', error });
    }
  },
  update: async (req, res) => {
    try {
      const { idUser, idPost } = req.params;
      const { body } = req;

      // Obtener y validar usuario
      const user = await UserService.getUser(idUser);
      if (!user) res.status(404).send({ message: 'User not found' });

      // Obtenemos el post del usuario
      // No lleva await porque no invocamos ninguna promesa
      const post = PostService.getByIdInUser(idPost, user);
      if (!post) res.status(404).send({ message: 'Post not found' });

      // Actualizamos el post
      const udpatedUser = await PostService.updateByIdInUser(idPost, user, body);

      res.status(200).send(udpatedUser.posts.id(idPost));
    } catch (error) {
      res.status(400).send({ message: 'Error getting user post by id', error });
    }
  },
};
