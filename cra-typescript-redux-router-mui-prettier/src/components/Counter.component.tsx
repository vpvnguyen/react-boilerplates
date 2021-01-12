import { useState, CSSProperties } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField, Typography } from "@material-ui/core";
import { selectCount } from "../redux/selectors/counterSelector";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../redux/reducers/counterSlice";

const style: CSSProperties = {
  borderStyle: "solid",
};

const CounterComponent = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div style={style}>
      <div>
        <Typography variant='h1'>Counter Component</Typography>
        <Button
          variant='outlined'
          size='large'
          color='primary'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </Button>

        <span>{count}</span>

        <Button
          variant='outlined'
          size='large'
          color='secondary'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
      <div>
        <TextField
          variant='outlined'
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(event) => setIncrementAmount(event.target.value)}
        />
        <Button
          variant='outlined'
          size='large'
          color='primary'
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </Button>
        <Button
          variant='outlined'
          size='large'
          color='secondary'
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </Button>
      </div>
    </div>
  );
};

export default CounterComponent;
