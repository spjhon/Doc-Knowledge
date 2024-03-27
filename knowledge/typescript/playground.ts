type Book = {
    author?: string,
    pages: number,
  };
  // Ok
  const ok: Book = {
    author: "Rita Dove",
    pages: 80,
  };
  
  const ok2: Book = {
    pages: 80,
  };
  
  const missing: Book = {
    author: "Rita Dove",
  };