type dataProps = {
  name?: string | null;
  email?: string | null;
  password?: string | null;
};

type paramsProps = {
  id: string;
};

function updateUserRoute(body, params) {
  updateUserController({data: body, params});
}

function updateUserController({data, params}: {data: dataProps; params: paramsProps}) {
  userRepository.update({data, params});
}

const userRepository = {
  update: ({data, params}: {data: dataProps; params: paramsProps}) => {},
};
