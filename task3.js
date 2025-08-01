for (let i = 1; i <= 100; i++) {
    
  const sqrt = Math.sqrt(i);

  if (sqrt % 1 === 0) {
    console.log(`The first perfect square is: ${i}`);
    break;
  }
}
