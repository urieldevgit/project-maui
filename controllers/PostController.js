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
};
