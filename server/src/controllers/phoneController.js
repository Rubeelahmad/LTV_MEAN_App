const ExternalApiService = require("../services/phoneListApi");

class PhoneController {
  static async getPhoneList(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 2; // Items per page

      const phoneList = await ExternalApiService.getPhoneList();

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const results = phoneList.slice(startIndex, endIndex);

      const pagination = {
        total: phoneList.length,
        totalPages: Math.ceil(phoneList.length / limit),
        currentPage: page,
        itemsPerPage: limit,
        hasNextPage: endIndex < phoneList.length,
        hasPrevPage: page > 1,
      };

      res.json({
        data: results,
        pagination,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PhoneController;
