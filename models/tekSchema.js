const tekSchema = new mongoose.Schema({
    // General Info
    name: String,
    description: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dateAdded: Date,
  
    // Tek Details
    steps: [String],
    materialsNeeded: [String],
    estimatedTime: String,
    difficultyLevel: String, // e.g., "Beginner", "Intermediate", "Expert"
  
    // User Ratings
    successRate: Number, // e.g., 0 to 100
    userRatings: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: Number, // e.g., 1 to 5
        comments: String,
      }
    ],
  });
  