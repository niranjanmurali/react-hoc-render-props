import './App.css';
import LikeImage from './components/HOC/LikeImage';
import LikePost from './components/HOC/LikePost';
import LikeImage2 from './components/RenderProps/LikeImage2';
import LikePost2 from './components/RenderProps/LikePost2';
import RenderProps from './components/RenderProps/RenderProps';

function App() {
  return (
    <div id='container' >
    {/* HOC */}
    <h2>Using HOC</h2>
    <p id='blog'>Some Blog...</p>
    <div className="buttons">
      <LikePost />
      <LikeImage />
    </div>

    {/* Render Props */}
    <h2>Using Render Props</h2>
    <p id='blog'>Some Blog...</p>
    <div className='buttons'>
      <RenderProps
        render={(count, handleCount) => (
          <LikePost2 count={count} handleCount={handleCount} />
        )}
      />
      <RenderProps
        render={(count, handleCount) => (
          <LikeImage2 count={count} handleCount={handleCount} />
        )}
      />
    </div>
  </div>
  );
}

export default App;