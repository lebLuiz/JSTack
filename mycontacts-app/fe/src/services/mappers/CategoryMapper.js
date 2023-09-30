class CategoryMapper {
// Captura objeto do Front e transforma no objeto que deseja enviar pro Back.
  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new CategoryMapper();
