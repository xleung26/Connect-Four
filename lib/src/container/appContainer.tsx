import { connect } from 'react-redux';
import App from '../components/app'
import { playersMove, turn, checkWin } from '../actions/index'

const mapStateToProps = (state) => ({
  board: state.board,
  turn: state.turn,
  winner: state.winner
})

const mapDispatchToProps = (dispatch) => ({
  handlePlayersMove: (col) => {
    dispatch(playersMove(col))
  },
  handleTurn: () => {
    dispatch(turn())
  },
  handleCheckWin: () => {
    dispatch(checkWin())
  }
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

