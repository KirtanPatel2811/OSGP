import React, { useState, useEffect } from "react";
import "./Inquiries.css";
import cross_icon from "../../assets/cross_icon.png";

const ListInquiries = () => {
  const [allInquiries, setAllInquiries] = useState([]);

  const fetchInquiries = async () => {
    await fetch("http://localhost:5555/inquiries")
      .then((res) => res.json())
      .then((data) => {
        setAllInquiries(data.inquiries);
      });
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const removeInquiry = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this inquiry?"
    );
    if (confirmed) {
      await fetch(`http://localhost:5555/removeinquiry`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      await fetchInquiries();
    }
  };

  return (
    <div className="listInquiries">
      <h1>Inquiries List</h1>
      <div className="listInquiries-format-main">
        <p>ID</p>
        <p>Name</p>
        <p>Contact</p>
        <p>Email</p>
        <p>Requirements</p>
        <p>Budget</p>
        <p>Remove</p>
      </div>
      <div className="listInquiries-allInquiries">
        <hr />
        {allInquiries.map((inquiry, index) => {
          return (
            <React.Fragment key={index}>
              <div className="listInquiries-format-main listInquiries-format">
                <p>{inquiry._id}</p>
                <p>{inquiry.Name}</p>
                <p>{inquiry.contact}</p>
                <p>{inquiry.email}</p>
                <p>{inquiry.requirements}</p>
                <p>₹{inquiry.budget}</p>
                <img
                  onClick={() => removeInquiry(inquiry._id)}
                  className="listInquiries-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ListInquiries;
