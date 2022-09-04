import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuGroup,
  MenuLabel,
  MenuItem,
  Button,
  Center
} from "@hope-ui/solid";


function App() {
  return (
    <Center m="200px" >
      <Menu>
        <Menu>
          {({ opened }) => (
            <>
              <MenuTrigger
                as={Button}
                variant="subtle"
                colorScheme="info">
                {opened() ? "Options" : "Option 1"}
              </MenuTrigger>
              <MenuContent>
                <MenuItem>Option 2</MenuItem>
                <MenuItem>Option 3</MenuItem>
              </MenuContent>
            </>
          )}
        </Menu>
        
        
      </Menu>
    </Center>
  );
}

export default App;
