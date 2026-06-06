import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

const getAllEmployees = () => {
  return axios.get(API_URL);
};

const getEmployeeById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const addEmployee = (employee) => {
  return axios.post(API_URL, employee);
};

const updateEmployee = (id, employee) => {
  return axios.put(`${API_URL}/${id}`, employee);
};

const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getAllEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};