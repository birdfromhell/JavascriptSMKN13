<template>
    <div>
        <h1>Sign Up</h1>
        <form >
            <label for="username">Username:</label>
            <input type="text" id="username"  required>
            
            <label for="email">Email:</label>
            <input type="email" id="email"  required>
            
            <label for="password">Password:</label>
            <input type="password" id="password"  required>
            
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>


<style scoped>
.container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 10px;
}

input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>