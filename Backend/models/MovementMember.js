import mongoose from "mongoose";

const movementMemberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "नाम आवश्यक छ"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    age: {
      type: Number,
      required: [true, "उमेर आवश्यक छ"],
      min: [16, "उमेर कम्तिमा 16 वर्ष हुनुपर्छ"],
      max: [120, "कृपया सही उमेर दिनुहोस्"],
    },

    mobile: {
      type: String,
      required: [true, "मोबाइल नम्बर आवश्यक छ"],
      unique: true,
      trim: true,
    },

    address: {
      type: String,
      required: [true, "ठेगाना आवश्यक छ"],
      trim: true,
      maxlength: 200,
    },

    ward: {
      type: Number,
      required: [true, "Ward नम्बर आवश्यक छ"],
      min: [1, "Ward नम्बर 1 देखि सुरु हुन्छ"],
      max: [5, "कृपया सही Ward नम्बर दिनुहोस्"],
    },

    movementId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

const MovementMember = mongoose.model("MovementMember", movementMemberSchema);

export default MovementMember;
