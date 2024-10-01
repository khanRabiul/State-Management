import { useState, useEffect } from "react"; // React এর হুকস ইমপোর্ট করা

function App() {
  // স্টেট ডিক্লেয়ারেশন
  const [names, setNames] = useState([]); 
  const [selectedName, setSelectedName] = useState(null); // এখানে useState ব্যবহার করতে হবে useEffect এর পরিবর্তে

  useEffect(() => {
    fetch("/names.json") // ডেটা ফেচ করা হচ্ছে
      .then((response) => response.json()) // JSON ফরম্যাটে ডেটা কনভার্ট করা
      .then((data) => setNames(data)); // ডেটা স্টেটে সেট করা হচ্ছে
  }, []); // নির্ভরতা অ্যারে খালি রাখার কারণে এটি কম্পোনেন্ট প্রথমবার মাউন্ট হলে একবার চলবে

  return (
    <>
      <div>
        <div>
          {/* প্রতিটি নামের জন্য একটি বাটন তৈরি করা */}
          {names.map((name) => (
            <button onClick={() => setSelectedName(name)} key={name}> 
              {name}
            </button>
          ))}
        </div>
        {/* সিলেক্টেড নামটি এখানে দেখানো হচ্ছে */}
        <div>{selectedName}</div>
      </div>
    </>
  );
}

export default App;
