---
layout: post
title: HMT-1 Adoptable Storage
categories: HMT-1 Forever adb
excerpt_separator: <!--more--> 
---

**Adoptable Storage**, a feature introduced in Android 6.0 Marshmallow that allows an external SD card to be formatted and encrypted to act like internal storage.

Here's the breakdown for RealWear HMT running Android 10, specifically regarding doing this **via ADB** (HMT-1 has no option to do that via UI):

<!--more-->

## Android 10 and Adoptable Storage
   *   The underlying Android 10 framework *does* support Adoptable Storage.
   *   However, many manufacturers (including RealWear, especially for enterprise/rugged devices) **disable the user interface** for enabling Adoptable Storage.
   
They often do this due to concerns about:
-   **Performance:** SD cards are almost always significantly slower than internal flash storage. Using a slow SD card as adopted storage can drastically slow down app loading, device responsiveness, and overall performance.
-   **Reliability:** SD cards have a finite lifespan and are more prone to failure than internal storage. If an adopted SD card fails, it can lead to major data loss, app crashes, and potentially require a factory reset of the device.
-   **User Experience:** The process can be confusing, and the encrypted nature means the card isn't easily swappable or readable by other devices.

## Using ADB to Force Adoptable Storage (Even if UI is Hidden)

It is often possible to enable Adoptable Storage via ADB commands, even if the option is hidden in the device's Settings UI. You are essentially interacting directly with the Android storage manager (`sm`).

**WARNINGS - Read Carefully Before Proceeding:**

*   **DATA LOSS:** This process **WILL ERASE EVERYTHING** currently on the SD card. Back up any important data first.
*   **PERFORMANCE IMPACT:** Use a **HIGH-SPEED** SD card (UHS-I Speed Class 3 (U3) / Video Speed Class 30 (V30), and ideally Application Performance Class A1 or A2 rated). A slow card will make your HMT feel sluggish.
*   **RELIABILITY RISK:** As mentioned, SD card failure is a risk. If the adopted card fails, apps installed on it and their data will be lost, and the device might become unstable.
*   **ENCRYPTION:** The adopted SD card will be encrypted and tied *only* to your specific HMT. You cannot remove it and read it in another device or computer without reformatting it (losing the data).
*   **UNSUPPORTED:** This is almost certainly an **unsupported configuration** by RealWear. If you encounter issues, RealWear support may not assist you, and it *could* potentially void your warranty. Proceed at your own risk.
*   **IRREVERSIBLE (without data loss):** While you can reformat the card back to portable storage later, any data stored on it while it was adopted will be lost in the process.

### Steps to Enable Adoptable Storage via ADB

1.  **Prerequisites:**
    *   Ensure ADB is working and your HMT is connected and authorized (either via USB or TCP/IP).
    *   Insert the SD card you want to adopt into the HMT.
    *   **BACK UP THE SD CARD'S DATA.**

2.  **Identify the SD Card Disk ID:**
    *   Open a terminal or command prompt on your computer.
    *   Run the command:
        ```bash
        adb shell sm list-disks
        ```
    *   Look for output similar to `disk:XXX,YY` (e.g., `disk:179,64`). This is the unique identifier for your SD card. Note it down.

3.  **Partition the SD Card:** You have two main options:

    *   **MAY BE NEEDED**: `adb shell sm set-force-adoptable true`

    *   **Option A: Use the ENTIRE SD card as adoptable storage:**
        *   This is simpler but means you can't easily use the card for simple file transfers by plugging it into a computer.
        *   Run the command (replace `disk:XXX,YY` with your actual disk ID):
            ```bash
            adb shell sm partition disk:XXX,YY private
            ```
        *   This command tells the storage manager to format the entire specified disk as private, encrypted, adoptable storage.

    *   **Option B: Split the SD card (Mixed Mode - Recommended for Flexibility):**
        *   This allows you to use part of the card as adoptable internal storage and keep the rest as traditional portable storage (readable by computers).
        *   Decide the percentage you want to keep as *portable*. For example, `mixed 50` means 50% portable, 50% adopted internal.
        *   Run the command (replace `disk:XXX,YY` and choose your percentage, e.g., `50`):
            ```bash
            adb shell sm partition disk:XXX,YY mixed 50
            ```

4.  **Wait:** The partitioning and formatting process can take several minutes, especially for larger cards. Don't interrupt it. The command prompt might just sit there until it's done.

5.  **Check the Result (Optional):**
    *   You can list the storage volumes and disks to see the new setup:
        ```bash
        adb shell sm list-disks adoptable
        adb shell sm list-volumes all
        ```
    *   You should see your disk and a `private` volume (your adopted storage) and potentially a `public` volume (if you chose mixed mode). Note the UUID of the `private` volume if shown.

6.  **Migrate Data (Important!):**
    *   Even though the storage is adopted, Android doesn't automatically move existing apps and data. You need to trigger the migration.
    *   **Check the UI first:** Go to `Settings -> Storage` on your HMT. Sometimes, even if the initial setup UI was hidden, the option to "Migrate data" might appear here after formatting via ADB. If you see the SD card listed, select it, look for menu options (three dots), and see if "Migrate data" is available. Use voice commands to navigate.


### Reverting

If you want to undo this and use the SD card as normal portable storage again (losing all data stored on the adopted part):
1.  Go to `Settings -> Storage` on the HMT. Select the SD card. Look for a "Format as portable" option.
2.  Alternatively, via ADB (replace `disk:XXX,YY` with your ID):
    ```bash
    adb shell sm partition disk:XXX,YY public
    ```

Given the potential downsides, especially performance and reliability on a device like the HMT, carefully consider if the extra space is worth the risks before proceeding.