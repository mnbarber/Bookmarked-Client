const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/books`;

const create = async (book) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(book)
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

export {
    create
}