import userStore from "@/stores/UserStore";
import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

const plugins = {
  dvr: dvr({
    package: validatorjs,
  }),
};

const fields = [
  {
    name: "avatar",
    label: "Avatar",
    placeholder: "Enter avatar url",
    rules: "required|string",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "id",
    label: "ID",
    placeholder: "Enter user id",
    rules: "required|numeric",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "first_name",
    label: "First name",
    placeholder: "Enter first name",
    rules: "required|string|min:2",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "last_name",
    label: "Last name",
    placeholder: "Enter last name",
    rules: "required|string|min:2",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter email address",
    rules: "required|email|string",
    options: {
      validateOnChange: true,
    },
  },
  {
    name: "state",
    label: "State",
    placeholder: "Select state",
    rules: "required|string",
    options: {
      validateOnChange: true,
    },
  },
];

const hooks = {
  onSuccess(form) {
    if (form.$("avatar").value.startsWith("https://")) {
      const user = {
        id: form.$("id").value,
        avatar: form.$("avatar").value,
        first_name: form.$("first_name").value,
        last_name: form.$("last_name").value,
        email: form.$("email").value,
        address: {
          state: form.$("state").value,
        },
      };
      userStore.addData(user);
    } else {
      form.$("avatar").invalidate("Valid URL must be provided.");
    }
  },
  onError(form) {
    form.invalidate("Form has errors!");
  },
};

export const myForm = new MobxReactForm({ fields }, { plugins, hooks });
