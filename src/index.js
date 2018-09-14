/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
	let count = 0, i=0, temp1=0,temp2=0;
	for(i=0; i<preferences.length; i++)
	{
		temp1=preferences[i];
		temp2=preferences[temp1-1];
		if(preferences[temp2-1]==i+1 && preferences[i]!=i+1){
			count++;
		}
	}
	return (count/3);
};
