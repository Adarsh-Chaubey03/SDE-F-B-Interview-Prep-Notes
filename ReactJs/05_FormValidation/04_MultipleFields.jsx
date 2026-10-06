const [form,setform]=useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
});

// separate handler
<input
value={form.name}
onChange={(e)=>
    setform({
        ...form,
        name: e.target.value
    })
}
/>

// instead of separate handler  use generic form handler
 const handleChange = (e) => {
    const {name,value} = e.target;

    setform({
        ...form,
        [name]: value
    });
 };
<>
 <input
  name="name"
  value={form.name}
  onChange={handleChange}
/>
// same handler for both
<input
  name="city"
  value={form.city}
  onChange={handleChange}
/>



// Select / Dropdown

<select name="state"
value={form.state}
onChange={handleChange}
>
    <option value="">Select State</option>
    <option value="Assam">Assam</option>
    <option value="Manipur">Assam</option>   
</select>

// The same handleChange works.


// checkbox
<input
type="checkbox"
checked={form.isDefault}
onChange={(e)=>setform({
    ...form,
    isDefault: e.target.checked
})}
/>

</>