#include<iostream>
#include<stdio.h>
using namespace std;

class Array {
    private:
        int capacity;
        int lastIndex;
        int *ptr;

    public:
        Array(int);
        bool isEmpty();
        bool isFull();
        void append(int);
        void insert(int, int);
        void edit(int, int);
        void del(int);
        int getItem(int);
        int count();
        ~Array();
        int find(int data);
};

Array::Array(int size) {
    if (size > 0) {
        capacity = size;
        lastIndex = -1;
        ptr = new int[capacity];
    } else {
        ptr = NULL;
    }
}

bool Array::isEmpty() {
    return lastIndex == -1;
}

bool Array::isFull() {
    return lastIndex == capacity - 1;
}

void Array::append(int data) {
    if (isFull()) {
        cout << "\nOverflow";
    } else {
        lastIndex++;
        ptr[lastIndex] = data;
    }
}

void Array::insert(int index, int data) {
    if (index < 0 || index > lastIndex + 1) {
        cout << "\nInvalid index";
    } else if (isFull()) {
        cout << "\nOverflow";
    } else {
        for (int i = lastIndex; i >= index; i--) {
            ptr[i + 1] = ptr[i];
        }
        ptr[index] = data;
        lastIndex++;
    }
}

void Array::edit(int index, int data) {
    if (index < 0 || index > lastIndex) {
        cout << "\nInvalid index or empty array";
    } else {
        ptr[index] = data;
    }
}

void Array::del(int index) {
    if (index < 0 || index > lastIndex) {
        cout << "\nInvalid index or empty array";
    } else {
        for (int i = index; i < lastIndex; i++) {
            ptr[i] = ptr[i + 1];
        }
        lastIndex--;
    }
}

int Array::getItem(int index) {
    if (index < 0 || index > lastIndex) {
        cout << "\nInvalid index or empty array";
        throw invalid_argument("Invalid index");
    }
    return ptr[index];
}

int Array::count() {
    return lastIndex + 1;
}

Array::~Array() {
    delete[] ptr;
}

int Array::find(int data) {
    for (int i = 0; i <= lastIndex; i++) {
        if (ptr[i] == data) {
            return i;
        }
    }
    return -1;
}

int main() {
    Array arr(10);
    arr.append(5);
    arr.append(10);
    arr.append(15);
    arr.insert(1, 20);
    arr.edit(2, 25);
    arr.del(3);
    cout << "Item at index 1: " << arr.getItem(1) << endl;
    cout << "Total count: " << arr.count() << endl;
    cout << "Find 25: " << arr.find(25) << endl;

    return 0;
}
