import { useSnackbar } from "notistack";
import { Button } from "@material-ui/core";

interface NotificationProps {
  title: string;
}

export const NotificationComponent = ({ title }: NotificationProps) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love hooks");
  };

  return (
    <>
      <h1>{title}</h1>
      <Button onClick={handleClick}>Show snackbar</Button>
    </>
  );
};
