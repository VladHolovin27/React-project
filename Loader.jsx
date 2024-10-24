const Loader = ({ isLoading }) => {
    return (
     <div>
         {isLoading ? (
             <p>Images are loading...</p>
         ) : (
             <p>Images have been loaded.</p>
         )}
     </div>
    )
 }
 
 export default Loader;