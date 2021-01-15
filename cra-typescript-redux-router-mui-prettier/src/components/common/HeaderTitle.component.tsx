import { Typography } from "@material-ui/core";

interface HeaderTitleProps {
  title: string;
}

const HeaderTitleComponent = ({ title }: HeaderTitleProps) => (
  <Typography variant='h2'>{title}</Typography>
);

export default HeaderTitleComponent;
