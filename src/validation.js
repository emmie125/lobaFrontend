import { extend } from "vee-validate";
import {
  required,
  email,
  confirmed,
  regex,
  double,
} from "vee-validate/dist/rules";

extend("email", { ...email, message: "Adresse mail incorrecte" });
extend("required", {
  ...required,
  message: 'Le champ "{_field_}" est requis',
});
extend("confirmed", {
  ...confirmed,
  message: "Le mot de passes ne correspond pas",
});
extend("double", {
  ...double,
  message:
    "Ce champs ne peut contenir que des données numérique (e.g. 1000 ou 1000.01)",
});
extend("phoneNumber", {
  ...regex,
  message: "{_field_} est incorrect",
  validate: (value) => /^0[8-9][0-9]{8}$/.test(value),
});
