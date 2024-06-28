import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChallenges } from '../Slices/Challenge.slice';
import { Link } from 'react-router-dom';
function ChallengeListComponent(){
    const dispatch = useDispatch();
  const challenges = useSelector((state) => state.challenges.items);
  const status = useSelector((state) => state.challenges.status);
  const error = useSelector((state) => state.challenges.error);


  useEffect(() => {
    dispatch(fetchChallenges());
  }, [dispatch]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

    return(
        <>
       <div className='homeBackgrounds'>
      <div className='text-center'>
        <Link to={'/addchallenge'}>
          <button className='btn btn-warning'>Add Challenge</button>
        </Link>
      </div>
      <section>
        <h2 className='text-center'>Challenges</h2>
        <div className="challenge-list">
          {challenges.map((challenge) => {
            return (
              <div key={challenge.id} className="card border-0 mx-4 mb-3 card-custom" style={{width:"100px"}}>
                <img className="card-img-top " src={`data:image/jpeg;base64,${challenge.imageData}`} alt={challenge.name} />
                <div className='card-body cardsbody' style={{ height: '100%' }}>
                  <h3 className='card-name'>{challenge.name}</h3>
                  <p className='card-text'>Description: {challenge.description}</p>
                  <p className='card-text'>Date: {challenge.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
        </>
    )
}
export default ChallengeListComponent;