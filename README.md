# GroceryMate
A Smart Grocery Delivery System that tracks and predicts grocery consumption patterns to ensure timely deliveries and reduce food waste.

# GroceryMate: Smart Grocery Delivery System

## Problem in Brief

Managing household groceries can be a time-consuming and inefficient process. People often forget to restock essential items like fruits and vegetables, leading to situations where they run out of necessary supplies. Conversely, over-purchasing groceries can result in waste, especially with perishable items.

### Challenges with Existing Solutions
Current solutions, such as online grocery delivery services, require users to:
- **Manually place orders** and monitor inventory themselves.
- Deal with **errors, delays, and inconvenience**, especially for busy individuals or families.

### The Gap
There is no automated system that:
1. **Tracks consumption patterns.**
2. **Predicts when groceries will run out.**
3. **Triggers timely reordering** to ensure a steady supply of fresh items.

### The Need
A smarter, technology-driven solution is required to:
- Ensure households always have essential groceries available.
- Minimize the manual effort required for grocery management.
- Reduce food waste caused by over-purchasing or expiration.

GroceryMate aims to bridge this gap by offering a fully automated, efficient, and reliable grocery delivery system.



## Proposed Solution

The proposed solution is **GroceryMate**, a Smart Grocery Delivery System designed to simplify household grocery management. This system provides users with a **manual inventory tracking system** where they can add, update, and delete grocery items. By setting thresholds for each item, users will receive **automated alerts** when stock runs low, and the system will suggest reorders to ensure they always have essential items in stock.

### Key Features of the Proposed Solution

#### 1.Manual Inventory Management
Users can easily manage their grocery items through a web application by:
- **Adding new items** to their inventory with details like name, quantity, and category (e.g., fruits, vegetables, dairy).
- **Updating quantities** as items are consumed or restocked.
- **Deleting items** that are no longer needed or have expired.

#### 2.Threshold-Based Alerts
- Users can set thresholds for each item (e.g., "Milk should be reordered when below 1 liter").
- When stock levels fall below the set threshold, the system will automatically notify users via:
  - **Pop-ups** or **emails**.
  - **Push notifications** about low stock.

#### 3.Automated Ordering Suggestions
- When an item reaches its low stock threshold:
  - The system will generate a **reorder suggestion**.
- Users can:
  - **Approve, edit**, or **cancel** the suggestion before the order is placed.
  - This ensures that essential items are restocked on time without the user needing to manually place the order.

#### 4.User-Friendly Dashboard
- A simple and intuitive **dashboard** allows users to:
  - View all grocery items in their inventory.
  - See quantities and remaining stock levels.
  - Track upcoming deliveries and manage orders.
  - Quickly add, update, or delete items with minimal effort.

#### 5.Waste Reduction and Efficiency
- By automating the reorder process based on real-time inventory updates and user-defined thresholds:
  - The system reduces **food waste** by ensuring users only order what they need.
  - Promotes **efficient grocery management**, saving users time and reducing the mental load of managing household supplies.



# GroceryMate - Use Case Diagram

## Introduction
GroceryMate is a Smart Grocery Delivery System designed to simplify household grocery management. The system allows users to manually manage their grocery inventory, set thresholds for low-stock alerts, and automate reorder suggestions. This **Use Case Diagram** illustrates the primary interactions between the user and the system.

## Actors
- **User**: The person who manages their grocery inventory.
- **System**: The GroceryMate system responsible for tracking inventory and generating alerts/orders.

## Use Cases
1. **Login/Registration**: User logs into the system or registers a new account.
2. **Manage Inventory**:
   - **Add Item**: User adds a new grocery item to the inventory.
   - **Update Item**: User updates the quantity of an existing grocery item.
   - **Delete Item**: User removes an item from the inventory.
3. **Set Thresholds**: User defines the minimum quantity for each item (when the system should alert them to reorder).
4. **View Inventory**: User can view all the items in their inventory, along with quantities and categories.
5. **Receive Low Stock Alerts**: The system notifies the user when an item’s stock is below the defined threshold.
6. **View Suggested Orders**: The system generates a list of items that need to be reordered based on the thresholds.
7. **Approve/Modify Order**: User can review, approve, or modify the suggested order.
8. **Place Order**: User places the order for groceries through the system.



