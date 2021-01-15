module.exports = (sequelize, Sequelize) => {
    const Filing = sequelize.define("filing", {
      direct_name: {
        type: Sequelize.STRING
      },
      indirect_name: {
        type: Sequelize.STRING
      },
      pages: {
        type: Sequelize.INTEGER
      },
      instrument_num: {
        type: Sequelize.STRING
      },
      document_type: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
      record_date: {
        type: Sequelize.DATE
      },
      parcel: {
        type: Sequelize.STRING
      },
      legal_desc: {
        type: Sequelize.STRING
      },
      consideration: {
        type: Sequelize.STRING
      },
      created: {
        type: Sequelize.DATE
      },
    }, {timestamps: false});
  
    return Filing;
  };
  