import { Chessboard } from "react-chessboard";

export default function Board() {
  return (
    <div id="basicBoard">
      <Chessboard boardWidth={400} />
    </div>
  );
}