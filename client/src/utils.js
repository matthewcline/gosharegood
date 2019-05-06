export default function getTimeSinceCreated(timeCreated) {
  const milliSeconds = Date.now() - timeCreated;
  const seconds = Math.floor(milliSeconds/1000);
  const minutes = Math.floor(seconds/60);
  const hours = Math.floor(minutes/60);
  const days = Math.floor(minutes/1440);
  if(seconds < 3600) {
      return `${minutes} minutes ago`;
  } else if(seconds < 7200) {
      return "1 hour ago";
  } else if(seconds < 86400) {
      return `${hours} hours ago`;
  } else if(seconds < 172800) {
      return  "1 day ago";
  } else {
      return `${days} days ago`
  }
}