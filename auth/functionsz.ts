export const register = (email: String, password: String) => {
  const query = `mutation callRegister {
    register(email: "${email}" password: "${password}") {
      _id
    }
  }`;
};

export const login = async (email, password) => {
  const query = `mutation callLogin {
    login(email: "${email}" password: "${password}")
  }`;
};
