import usersData from "../models/users.json" with { type: "json" };

let users = [...usersData];

export const getAllUsers = (req, res) => {
  res.send("Get users route");
};

export const addUser = (req, res) => {
  const newUser = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
  };

  users.push(newUser);
  res.send("Post users route");
};

export const getUserById = (req, res) => {
  const id = Number(req.params.userId);

  res.send(`Get user by Id route: ${id}`);
};

export const updateUser = (req, res) => {
  const id = Number(req.params.userId);

  res.send(`Put user by Id route: ${id}`);
};

export const deleteUser = (req, res) => {
  const id = Number(req.params.userId);

  res.send(`Delete user by Id route: ${id}`);
};