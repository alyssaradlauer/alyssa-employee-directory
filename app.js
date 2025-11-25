import express from "express";
import employees from "#db/employees";

const app = express();

export default app;

app.get("/", (req, res, next) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res, next) => {
  res.send(employees);
});

app.get("/employees/random", (req, res, next) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.send(randomEmployee);
});

app.get("/employees/:id", (req, res, next) => {
  const id = Number(req.params.id);
  const employee = employees[id - 1];

  if (!employee)
    return res.status(404).send("There is no employee with this ID");

  res.send(employee);
});
