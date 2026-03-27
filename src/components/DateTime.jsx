import React from 'react'


const DateTime = () => {
  const [dateTime, setDateTime] = React.useState("");

  React.useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      };
      // Format: "Wed Jan 7 12:21 PM"
      const formatted = now.toLocaleString('en-US', options)
        .replace(/,/g, " ") // Replace all commas with a space
        .replace(/ (\d{1,2}):(\d{2}) ([AP]M)/, (match, h, m, ampm) => ` ${h}:${m} ${ampm}`);
      setDateTime(formatted);
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {dateTime}
    </div>
  );
}

export default DateTime;
