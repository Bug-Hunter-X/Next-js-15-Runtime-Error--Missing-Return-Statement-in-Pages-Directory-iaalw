```javascript
// pages/about.js

export default function About() {
  const data = [1, 2, 3];

  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```