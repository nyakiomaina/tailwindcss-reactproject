import React,{useState, useEffect} from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
  }, [] );

  return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src="https://source.unsplash.com/random" alt = "" className="w-full"/>
        <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
              photo by nyakio
            </div>
            <ul>
              <li>
                <strong>Views: </strong>
                38
              </li>
              <li>
                <strong>Likes: </strong>
                30
              </li>
              <li>
                <strong>Downloads: </strong>
                3
              </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2">tag#1</span>
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2">tag#1</span>
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2">tag#1</span>
        </div>
  </div>
  );
}

export default App;
