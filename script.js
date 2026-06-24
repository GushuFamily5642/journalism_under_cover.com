body {
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    background: #f7f7f7;
    color: #111;
}

.site-header {
    background: white;
    text-align: center;
    padding: 35px 20px;
    border-bottom: 1px solid #ddd;
}

.site-header h1 {
    font-size: 46px;
    margin: 0;
    letter-spacing: 1px;
}

.site-header p {
    margin-top: 8px;
    color: #555;
}

.navbar {
    background: #111;
    text-align: center;
    padding: 14px;
}

.navbar a {
    color: white;
    text-decoration: none;
    margin: 0 14px;
    font-family: Arial, sans-serif;
    font-size: 15px;
}

.navbar a:hover {
    text-decoration: underline;
}

.content {
    max-width: 1100px;
    margin: 35px auto;
    padding: 0 20px;
}

.featured-article {
    background: white;
    padding: 35px;
    border-left: 6px solid #111;
    margin-bottom: 30px;
}

.featured-article h2 {
    font-family: Arial, sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    color: #666;
}

.featured-article h3 {
    font-size: 32px;
    margin: 10px 0;
}

.article-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
}

.article-grid article {
    background: white;
    padding: 25px;
    border-top: 4px solid #111;
}

button {
    background: #111;
    color: white;
    border: none;
    padding: 12px 20px;
    cursor: pointer;
}

button:hover {
    background: #333;
}

footer {
    text-align: center;
    padding: 25px;
    background: #111;
    color: white;
    margin-top: 40px;
}
