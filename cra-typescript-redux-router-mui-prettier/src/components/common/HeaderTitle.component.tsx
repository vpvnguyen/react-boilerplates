import { Typography } from "@material-ui/core";

interface HeaderTitleProps {
  title: string;
}

const HeaderTitleComponent = ({ title }: HeaderTitleProps) => (
  <Typography variant='h1'>{title}</Typography>
);

export default HeaderTitleComponent;
