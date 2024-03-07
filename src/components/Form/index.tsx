import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { observer } from "mobx-react";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "District of Columbia",
  "American Samoa",
  "Guam",
  "Northern Mariana Islands",
  "Puerto Rico",
  "United States Minor Outlying Islands",
  "Virgin Islands",
];

interface ChildProps {
  form: any;
  closeModal: () => void;
}

export const Form: React.FC<ChildProps> = observer(({ form, closeModal }) => {
  return (
    <Stack>
      {form.map((field: any) => {
        if (field.name != "state") {
          return (
            <FormControl key={field.name} isInvalid={field.error}>
              <FormLabel>{field.label}</FormLabel>
              <Input {...field.bind()}></Input>
              <FormErrorMessage>{field.error}</FormErrorMessage>
            </FormControl>
          );
        } else {
          return (
            <FormControl key={field.name} isInvalid={field.error}>
              <FormLabel>{field.label}</FormLabel>
              <Select {...field.bind()}>
                {states.map((state) => {
                  return <option key={state}>{state}</option>;
                })}
              </Select>
              <FormErrorMessage>{field.error}</FormErrorMessage>
            </FormControl>
          );
        }
      })}
      <Button
        isDisabled={form.hasError}
        colorScheme="green"
        onClick={() => {
          form.onSubmit();
          closeModal();
        }}
      >
        Add user
      </Button>
    </Stack>
  );
});
