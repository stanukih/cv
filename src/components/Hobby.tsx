
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Hobby({ hobbydata }: any) {
  return (
    <List>
      <ListItem>{hobbydata}</ListItem>
    </List>
  );
}

export default Hobby;
