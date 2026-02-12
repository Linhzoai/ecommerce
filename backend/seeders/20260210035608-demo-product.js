/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          id: "23621bdb-35b5-48e3-b12e-aeb611d33cf8",
          name: "Hendrerit enim morbi",
          price: 38.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "31d3a57e-5eda-432e-b5c7-30f9e7a64f8c",
          name: "Duis aute irure",
          price: 304.89,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "2a17db45-15cb-4080-a70a-b60faed725d2",
          name: "Gravida quis",
          price: 120.3,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-15.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-15.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-15.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "e877e27b-6f6a-4721-a6eb-a10670e6861a",
          name: "Justo sit eget",
          price: 124,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-5.3-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-5.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-5.4-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "c39514bd-c2d6-4bfd-b018-b6a35044994d",
          name: "Hendrerit enim morbi 2",
          price: 38.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
            size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "e1c26562-509c-418a-b5ac-1e87a60c614a",
          name: "Volutpat lacus",
          price: 879.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "20d918f0-fd12-4140-b01f-65b3a196bea6",
          name: "Rhoncus facilisis tempus",
          price: 888.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-10.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-10.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-10.3-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-10.4-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "2b78f6f4-2e30-4068-be61-95a866dfc7d8",
          name: "Nulla nulla morbi",
          price: 13.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-8.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-8.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-8.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "0bb6f9ba-6624-4eb1-a424-e6b1b63af01a",
          name: "Magna malesuada orci",
          price: 23.9,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-3.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-3.2-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "9f770e90-1948-46d2-926b-ed513e713b38",
          name: "Erat mattis gravida",
          price: 200,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-6.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "c4a7460f-c4a6-4119-9336-afa217644679",
          name: "Donec et odio",
          price: 879.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Fleece, Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-19.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-19.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-19.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "8e1cf6ee-bc94-41c6-af26-82770071ff4c",
          name: "Dignissim molestie pellentesque",
          price: 888.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Fleece, Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-9.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-9.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-9.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "760fe090-f049-4286-829f-d34e091a05d1",
          name: "Consectetur nibh at",
          price: 119.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Fleece, Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.4-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "1fae8e4a-4183-4581-8832-5de4517d57da",
          name: "Hendrerit enim morbi 3",
          price: 38.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "3d1ed711-0282-423f-870c-a6f6d4640993",
          name: "Est suspendisse nibh",
          price: 290.2,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-12.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-12.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-12.3-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-12.4-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "bb35a2c4-4954-4656-b014-475d30d14d86",
          name: "Duis aute irure 2",
          price: 304.89,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-13.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "fee516e1-f0e7-4fec-beab-abe9990b4f44",
          name: "Gravida quis 2",
          price: 120.3,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-15.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-15.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-15.3-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "29150ab8-c915-4c79-a75c-c6e66682d7b7",
          name: "Nunc sed augue",
          price: 434.2,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Fleece, Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.3-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.4-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "d8f4c49e-5ba1-4cee-b5c9-a89986f1b431",
          name: "Volutpat lacus 2",
          price: 879.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Fleece, Polyester, Cotton, Elastane",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.3-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.4-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "2b49954d-ce18-406f-8426-112bea18d426",
          name: "Consectetur nibh at 2",
          price: 119.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Fleece",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg",
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.2-min.jpg",
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.3-min.jpg",
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.4-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "8e5d1a42-a60f-491a-9454-457692235687",
          name: "10K Yellow Gold",
          price: 99.99,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Fleece",
          images: JSON.stringify([
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg",
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg",
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.3-min.jpg",
            "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.4-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
        {
          id: "7fe1061c-4078-4630-a4e3-b5e3ed04fc46",
          name: "Scelerisque eleifend",
          price: 435,
          description:
            "Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque arcu purus orci leo.",
          size: JSON.stringify([
            { name: "S", amount: "1000" },
            { name: "M", amount: "1000" },
            { name: "L", amount: "1000" },
          ]),
          material: "Jeans, Polyester, Cotton",
          images: JSON.stringify([
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.1-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.2-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.3-min.jpg",
            "https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-17.4-min.jpg",
          ]),
          createdAt: now,
          updatedAt: now,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
