import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Box } from "./components/context/Box";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/template-literals/Toast";
import { Text } from "./components/polymorphic/Text";

import "./App.css";

const App = () => {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <ThemeContextProvider>
        <UserContextProvider>
          <Greet name="Mahdi" messageCount={20} isLoggedIn={false} />
          <Person name={personName} />
          <PersonList names={nameList} />
          <Status status="loading" />
          <Heading>Placeholder text</Heading>
          <Oscar>
            <Heading>Oscar goes to Leonardo Dicpario!</Heading>
          </Oscar>
          <Greet name="Mahdi" isLoggedIn={false} />
          <Button
            handleClick={(event, id) => {
              console.log("Button Clicked::", event, id);
            }}
          />
          <Input value="" handleChange={(event) => console.log(event)} />
          <Container styles={{ border: "1px solid black", padding: "1rem" }} />
          <Box />
          <User />
          <Private isLoggedIn={true} component={Profile} />
          <List
            items={["Batman", "Superman", "Wonder Woman"]}
            onClick={(item) => console.log(item)}
          />
          <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
          <RandomNumber value={10} isPositive />
          <Toast position="center-bottom" />
          <Text as="h1" size="lg">
            Heading
          </Text>
          <Text as="p" size="md">
            Paragraph
          </Text>
          <Text as="label" size="sm" color="secondary">
            Label
          </Text>
        </UserContextProvider>
      </ThemeContextProvider>
    </div>
  );
};

export default App;
